// Session Scribe: writes downloaded model files into this phone's private app storage a piece at a time,
// so a large model never has to sit in memory while it's saved.
let h = null;
async function dir(){ const root = await navigator.storage.getDirectory(); return root.getDirectoryHandle("models", {create:true}); }
onmessage = async e => {
  const m = e.data;
  try {
    if (m.op === "ping") {
      const f = await (await dir()).getFileHandle(".probe", {create:true});
      const x = await f.createSyncAccessHandle(); x.close();
      postMessage({id:m.id, ok:true});
    } else if (m.op === "open") {
      if (h) { try { h.close(); } catch {} h = null; }
      const f = await (await dir()).getFileHandle(m.name, {create:true});
      h = await f.createSyncAccessHandle();
      if (m.truncate) h.truncate(0);
      postMessage({id:m.id, ok:true, size:h.getSize()});
    } else if (m.op === "write") {
      const buf = new Uint8Array(m.buf); let off = 0;
      while (off < buf.byteLength) off += h.write(buf.subarray(off), {at:m.at + off});
      postMessage({id:m.id, ok:true});
    } else if (m.op === "close") {
      let size = 0;
      if (h) { h.flush(); size = h.getSize(); h.close(); h = null; }
      postMessage({id:m.id, ok:true, size});
    }
  } catch (err) {
    if (m.op !== "write") { try { if (h) h.close(); } catch {} h = null; }
    postMessage({id:m.id, ok:false, error:String(err && err.message || err)});
  }
};

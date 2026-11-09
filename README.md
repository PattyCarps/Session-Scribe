# Session Scribe

A free phone app for running tabletop sessions. Record the table, transcribe it with Whisper on your phone, and have a built-in AI write the notes and sort your lore, also on your phone. No accounts, no API keys, no subscriptions. Your campaigns and recordings never leave the phone.

The only time the app goes online is to download the AI models the first time you use them (from Hugging Face). Everything else, including the AI engine itself, ships inside this folder.

## Put it online (one time, on a computer)

No file in this folder is over 25 MB, so either free host works.

**GitHub Pages**
1. Make a free account at github.com and create a new **public** repository called `session-scribe`.
2. Unzip this folder. In the repository, click **uploading an existing file** and drag in everything, including the `lib` folder. Click **Commit changes**.
3. Go to **Settings → Pages**, choose **main** and **/(root)**, and save. Your link appears after a minute or two.

**Cloudflare Pages**
1. Make a free account at cloudflare.com.
2. Go to **Workers & Pages → Create application → Get started → Drag and drop your files**, name the project, and drag in the zip.

## Install it on an iPhone

1. Open your link in **Safari**, then tap **Share → Add to Home Screen**.
2. Open it from the new icon.
3. On Wi-Fi, go to **Settings** and tap **Download model now** under both **Whisper** and **Built-in AI**.
   Keep the app open while it downloads. If the download gets interrupted, tap the button again and it picks up where it left off.

## Organizing: Worlds → Campaigns → Arcs → Sessions

Everything lives in the **Library** tab.

- **World:** your setting's lore (paste it, or import .txt, .md, .docx or .pdf) and a names list for spelling.
- **Campaign:** its own lore, player characters, NPCs, arcs and sessions.
- **Arc:** a stretch of the story with notes, lore and an automatic "story so far."

**Sorting lore:** open a lore document and choose:
- **Sort on this phone:** the built-in AI splits it by headings, files each part under Places, Factions, History and so on, and pulls out NPCs and names.
- **Quick sort (no AI):** instant, using headings and `Name — description` lines.
- **Use Claude instead:** best quality, through copy and paste with a free Claude account.

## Search

The search bar at the top of the **Library** finds anything: NPCs, characters, lore, arcs, session notes, table logs and transcripts. Tap a result to jump straight to it. Spelling of apostrophes doesn't matter, so `xioryon` finds Xi'Oryon.

## DM-only secrets

- **Lore documents:** turn on **DM only** for any document.
- **NPCs and player characters:** each has a **DM-only secrets** box, separate from their regular notes.
- **Arcs:** arc notes are always treated as DM only.

Claude can read secrets to follow the story; the built-in AI never sees them. Every player recap, whichever AI wrote it, is checked for names and phrases that only appear in DM-only material. If it finds any, you'll see **Check before sharing** with a one-tap **Remove those sentences**, and the share buttons ask for a second tap. The check catches names and copied wording, not reworded secrets, so still give recaps a read.

## During a session

1. Start a new session. The **Table** tab opens with **Last time**: the previous player recap, ready to read aloud (with a bigger-text button), the arc's story so far, open threads, and your prep notes.
1. Set the iPhone's Auto-Lock to **Never** (Settings → Display & Brightness). Recording pauses if the screen locks.
2. Put the phone in the middle of the table, plugged in, with the app open on **Listen**, and tap the red button.
3. Use the **Table** tab for quick tagged notes. An NPC line like `Sorrel — dockside fixer` adds them to the campaign right away.

## After a session

1. **Listen → Transcribe recording.** Keep the app open and plugged in. You can stop and pick up later.
2. **Notes → Make notes.** The built-in AI reads the transcript in parts, looks up any lore that mentions the same names, and writes the recap, player recap, NPCs, places, threads and the arc's story so far.
3. **Review** the new NPCs, character moments, lore and arc story, untick anything you don't want, and save.

For the best notes, open **Or use Claude instead** on the Notes tab. It works the same way through copy and paste.

## Player journal

On a campaign's page, **Player journal** collects every session's player recap in order, grouped by arc, with an optional "What we learned" list. Copy it, share it, or save it as a file. It flags any recap that still mentions DM-only material before you send it.

## Choosing models (Settings)

- **Whisper:** Tiny, Base, Small (recommended), Distil-Small, or Large-v3 Turbo. Bigger is more accurate and slower.
- **Built-in AI:** Qwen2.5 0.5B (fastest), Llama 3.2 1B (recommended), Gemma 3 1B, or Qwen2.5 1.5B (best, heaviest). The built-in AI is a small model: good for a solid recap and for filing names, but it misses details that Claude catches.

Only one model is loaded at a time, so transcribing and note-making don't fight over the phone's memory.

Large-v3 Turbo and the biggest built-in AI models can be more than an iPhone will hold in memory. If a model doesn't finish loading, the app notices the next time it opens and switches to the processor, which uses less memory. If it still won't load, pick a smaller model.

## Good to know

- **Back up now and then:** use **Settings → Back up everything**. Recordings aren't in backups, so transcribe them first.
- **Sharing a setting:** use **Share world file** in a world's settings to send its lore, campaigns, characters, NPCs and arcs to another DM, without your session notes.

## Credits

Open-source parts, with licenses in the `lib` folder:
- Whisper and the language models from Hugging Face
- Transformers.js and ONNX Runtime
- mammoth.js and PDF.js
- Spectral, Atkinson Hyperlegible and JetBrains Mono fonts

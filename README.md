# Session Scribe

A free phone app for running tabletop sessions. Record the table, transcribe it with Whisper right on your phone, and have Claude turn it into notes that file themselves into your worlds, campaigns, NPCs and arcs. No API keys, no subscriptions, and your data stays on your phone.

## Put it online (one time, about 5 minutes, on a computer)

1. Unzip this folder.
2. Make a free account at netlify.com.
3. In your Netlify dashboard, choose **Add new project → Deploy manually** and drag the unzipped folder onto the page.
4. Rename the project under **Project configuration → Change project name** (for example `session-scribe-yourname`). Your link becomes `session-scribe-yourname.netlify.app`.

To update later: open the project in Netlify, go to **Deploys**, and drag in the new folder. The link stays the same.

## Install it on an iPhone

1. Open your link in **Safari**.
2. Tap **Share → Add to Home Screen → Add**.
3. Open it from the new icon. Allow the microphone the first time you record.
4. In **Settings**, pick a Whisper model and tap **Download model now** while you're on Wi-Fi. Small is the best balance on a recent iPhone.

## Organizing: Worlds → Campaigns → Arcs → Sessions

Everything lives in the **Library** tab.

- **World:** your setting. Add lore (paste it, or import .txt, .md, .docx or .pdf) and a list of names and places.
- **Campaign:** its own lore, player characters, NPCs, arcs and sessions. Several campaigns can share a world.
- **Arc:** a stretch of the story with its own notes, lore and an automatic "story so far."

Open any lore document and use **Organize with Claude** to sort it into NPCs, characters, lore entries and spellings.

## During a session

1. Set the iPhone's Auto-Lock to **Never** (Settings → Display & Brightness). Recording pauses if the screen locks.
2. Put the phone in the middle of the table, plugged in, with the app open on the **Listen** tab, and tap the red button.
3. Use the **Table** tab for quick tagged notes. An NPC line like `Sorrel — dockside fixer` adds them to the campaign's NPC list straight away.

## After a session

1. **Listen → Transcribe recording.** Whisper runs on the phone; keep it open and plugged in until it's done. You can stop and pick up later.
2. **Notes → Copy for Claude.** Paste it into a new chat in the Claude app (a free account works). Very long sessions are split into a few parts; paste them in order.
3. Copy Claude's reply (tap Copy on its code block), paste it back, and tap **File it**.
4. Review the changes (new NPCs, character moments, lore, the arc's story so far), untick anything you don't want, and save.

## Other ways to get a transcript

- **Upload a recording** on the Listen tab: MP3 and WAV of any length, M4A up to about an hour.
- **Live captions** (iPhone speech recognition): quicker, less accurate, can't run while recording.
- **Paste a transcript** from Voice Memos or anything else under "Edit or paste a transcript."

## Good to know

- Everything is stored on the phone. Use **Settings → Back up everything** now and then. Recordings aren't in backups, so transcribe them first.
- The first Whisper run needs internet to download the model. After that it works offline.
- Share a setting with another DM from a world's settings with **Share world file** (lore, campaigns, characters, NPCs and arcs, not your session notes).

Whisper models come from Hugging Face and run with Transformers.js. Word and PDF import use mammoth.js and PDF.js (licenses in the lib folder).

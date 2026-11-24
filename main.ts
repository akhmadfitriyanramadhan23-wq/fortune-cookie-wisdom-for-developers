// Fortune Cookie Wisdom for Developers — u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes the entry (one line of fortune-cookie wisdom, at most 120 characters)
// to /output/entry.txt. Node 22, standard library only, no network, deterministic.
// Fortune-cookie shape: one balanced sentence, a true developer day
// (a week-long bug hunt), turned by the reveal that it was a typo all along.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your future holds a bug you will chase all week, and it is a typo — it was always a typo.";
const MAX = 120;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

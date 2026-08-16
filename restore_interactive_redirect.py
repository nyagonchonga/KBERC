import pathlib

dir1 = pathlib.Path("src/app/viewer/interactive")
dir1.mkdir(parents=True, exist_ok=True)

dir2 = pathlib.Path("src/app/viewer/interactive/[part]")
dir2.mkdir(parents=True, exist_ok=True)

# 1. Main interactive page redirect
p1 = dir1 / "page.tsx"
p1.write_text("""import { redirect } from 'next/navigation';

export default function InteractiveRedirect() {
  redirect('/viewer/read');
}
""", encoding="utf-8")

# 2. Part parameter redirect
p2 = dir2 / "page.tsx"
p2.write_text("""import { redirect } from 'next/navigation';

export default function InteractivePartRedirect() {
  redirect('/viewer/read');
}
""", encoding="utf-8")

print("Successfully created seamless redirects for /viewer/interactive and /viewer/interactive/[part]!")

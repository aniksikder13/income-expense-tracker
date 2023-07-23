export default function Footer() {
    const copyrightYear= new Date().getFullYear()
  return (
    <footer>
        <p>
          {copyrightYear} @ All rights reserved
        </p>
    </footer>
  )
}
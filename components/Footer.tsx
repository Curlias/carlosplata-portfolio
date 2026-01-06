export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
        <p>
          © {currentYear} Carlos Alberto Plata Monroy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

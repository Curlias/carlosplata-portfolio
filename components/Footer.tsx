export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-600">
          © {currentYear} Carlos Alberto Plata Monroy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

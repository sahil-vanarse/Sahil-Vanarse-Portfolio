import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">    
      <div className="pt-8 border-t border-slate-700 text-center text-slate-300">
        <p className="flex items-center justify-center gap-2">
          © {currentYear} Sahil Vanarse. Made with <Heart size={16} className="text-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
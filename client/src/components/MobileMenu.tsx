interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`md:hidden glass-effect pb-4 border-b border-green-100/20 ${isOpen ? "" : "hidden"}`}>
      <div className="px-4 pt-2 pb-3 space-y-1">
        <a 
          href="#features" 
          className="block px-4 py-3 text-gray-600 hover:bg-green-50/50 hover:text-green-600 rounded-xl font-medium transition-all"
          onClick={handleLinkClick}
        >
          Features
        </a>
        <a 
          href="#how-it-works" 
          className="block px-4 py-3 text-gray-600 hover:bg-green-50/50 hover:text-green-600 rounded-xl font-medium transition-all"
          onClick={handleLinkClick}
        >
          How It Works
        </a>
        <a 
          href="#download" 
          className="block px-4 py-3 text-gray-600 hover:bg-green-50/50 hover:text-green-600 rounded-xl font-medium transition-all"
          onClick={handleLinkClick}
        >
          Download
        </a>
      </div>
    </div>
  );
}

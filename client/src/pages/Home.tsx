import { useState } from "react";
import { ShoppingCart, Menu, X, Search, Sparkles } from "lucide-react";
import { PRODUCTS, COMPANY_INFO, FEATURES } from "@shared/const";

type Product = typeof PRODUCTS[0];
type Feature = typeof FEATURES[0];

/**
 * Design Philosophy: Luxury Minimalism
 * - Clean white background with gold accents (#D4AF37)
 * - Playfair Display for headings, Lato for body text
 * - Ample whitespace and elegant spacing
 * - Smooth, subtle transitions
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Rapid BH Pro
              </div>
              <div className="text-xs text-muted-foreground">Premium Care</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              المنتجات
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              المميزات
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              من نحن
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              اتصل بنا
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-sm transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 hover:bg-secondary rounded-sm transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#products" className="text-sm font-medium hover:text-primary">
                المنتجات
              </a>
              <a href="#features" className="text-sm font-medium hover:text-primary">
                المميزات
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary">
                من نحن
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
                تنظيف فاخر
              </div>
              <h1 className="luxury-heading mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                النظافة المثالية
              </h1>
              <p className="luxury-text mb-8 max-w-lg">
                اكتشف مجموعة منتجات التنظيف الفاخرة من Rapid BH Pro. مصممة بعناية لتوفير أفضل أداء مع الحفاظ على سلامة أسطحك وأقمشتك.
              </p>
              <div className="flex gap-4">
                <button className="luxury-button">
                  اكتشف المنتجات
                </button>
                <button className="px-8 py-3 border border-foreground text-foreground font-semibold rounded-sm hover:bg-secondary transition-colors">
                  اعرف أكثر
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663177269080/YWXkJd88YZysQjxCAXU7do/hero-banner-7P4Kbe3MedqdSkkkeasUUL.webp"
                alt="Hero"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-divider my-12" />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
              لماذا نحن
            </div>
            <h2 className="luxury-subheading" style={{ fontFamily: "'Playfair Display', serif" }}>
              مميزات استثنائية
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {FEATURES.map((feature: Feature) => (
              <div key={feature.id} className="luxury-card p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-divider my-12" />

      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
              مجموعتنا
            </div>
            <h2 className="luxury-subheading" style={{ fontFamily: "'Playfair Display', serif" }}>
              منتجات متميزة
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product: Product) => (
              <div
                key={product.id}
                className="luxury-card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square bg-secondary overflow-hidden">
                  <img
                    src={product.img || (product.images?.[0] || "")}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.info}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {product.price} AED
                    </span>
                    <button
                      className="p-2 bg-primary/10 hover:bg-primary hover:text-white rounded-sm transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart();
                      }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-divider my-12" />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663177269080/YWXkJd88YZysQjxCAXU7do/about-section-VreGHuFHLJjtgF7ZjNqZMM.webp"
                alt="About"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
                عن رابيد بي اتش برو
              </div>
              <h2 className="luxury-subheading mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                الجودة والابتكار
              </h2>
              <p className="luxury-text mb-4">
                نحن متخصصون في إنتاج منتجات تنظيف فاخرة وعالية الجودة. كل منتج يتم تطويره بعناية فائقة لضمان أفضل أداء.
              </p>
              <p className="luxury-text mb-8">
                التزامنا بالجودة والابتكار يجعلنا الخيار الأول للعملاء الذين يبحثون عن الأفضل.
              </p>
              <button className="luxury-button">
                اعرف المزيد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-divider my-12" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider">
              تواصل معنا
            </div>
            <h2 className="luxury-subheading mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              نحن هنا لمساعدتك
            </h2>
            <p className="luxury-text mb-8">
              هل لديك أسئلة؟ تواصل معنا عبر WhatsApp أو البريد الإلكتروني
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button"
              >
                تواصل عبر WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="px-8 py-3 border border-foreground text-foreground font-semibold rounded-sm hover:bg-secondary transition-colors"
              >
                أرسل بريد إلكتروني
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Rapid BH Pro
              </div>
              <p className="text-sm text-muted-foreground">
                منتجات تنظيف فاخرة وعالية الجودة
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">الروابط</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#products" className="hover:text-primary transition-colors">المنتجات</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">من نحن</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">المتابعة</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">التواصل</h4>
              <p className="text-sm text-muted-foreground mb-2">
                WhatsApp: <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-primary hover:underline">{COMPANY_INFO.whatsapp}</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </div>
          <div className="luxury-divider mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Rapid BH Pro. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <button
                className="float-right text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.img || (selectedProduct.images?.[0] || "")}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
                <div>
                  <h2 className="luxury-subheading mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedProduct.name}
                  </h2>
                  <p className="text-2xl font-bold text-primary mb-6">
                    {selectedProduct.price} AED
                  </p>
                  <p className="luxury-text mb-8">
                    {selectedProduct.info}
                  </p>
                  <button
                    className="luxury-button w-full mb-4"
                    onClick={() => {
                      handleAddToCart();
                      setSelectedProduct(null);
                    }}
                  >
                    أضف إلى السلة
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=أنا مهتم بـ ${selectedProduct.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-8 py-3 border border-foreground text-foreground font-semibold rounded-sm hover:bg-secondary transition-colors"
                  >
                    اطلب عبر WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  description: string;
}

// Demo products with category-matched images
const demoProducts: Product[] = [
  { id: 1, name: "Laptop Pro 14\"", price: 120000, category: "Electronics", stock: 5, image: "https://images.unsplash.com/photo-1587825140708-ec756aee6b2c?auto=format&fit=crop&w=400&q=80", description: "High performance laptop with 16GB RAM." },
  { id: 2, name: "Wireless Headphones", price: 4500, category: "Electronics", stock: 10, image: "https://images.unsplash.com/photo-1598550958069-066f1bff6e18?auto=format&fit=crop&w=400&q=80", description: "Noise-cancelling over-ear headphones." },
  { id: 3, name: "Smartphone X", price: 65000, category: "Electronics", stock: 8, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", description: "Latest smartphone with 5G support." },
  { id: 4, name: "Gaming Chair", price: 15000, category: "Furniture", stock: 6, image: "https://images.unsplash.com/photo-1616627561213-1c33a404986c?auto=format&fit=crop&w=400&q=80", description: "Ergonomic chair with adjustable height." },
  { id: 5, name: "Office Desk", price: 12000, category: "Furniture", stock: 4, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80", description: "Spacious desk with cable management." },
  { id: 6, name: "Running Shoes", price: 3500, category: "Sports", stock: 12, image: "https://images.unsplash.com/photo-1612874748496-c0221516c34e?auto=format&fit=crop&w=400&q=80", description: "Lightweight and comfortable shoes." },
  { id: 7, name: "Yoga Mat", price: 1200, category: "Sports", stock: 20, image: "https://images.unsplash.com/photo-1589758438368-b1f66f7a9c6e?auto=format&fit=crop&w=400&q=80", description: "Eco-friendly non-slip yoga mat." },
  { id: 8, name: "Coffee Maker", price: 5000, category: "Appliances", stock: 7, image: "https://images.unsplash.com/photo-1584378868071-54e5a043f2a4?auto=format&fit=crop&w=400&q=80", description: "Automatic coffee machine with grinder." },
  { id: 9, name: "Blender Pro", price: 3500, category: "Appliances", stock: 10, image: "https://images.unsplash.com/photo-1617196038741-92f2f8b3c2e8?auto=format&fit=crop&w=400&q=80", description: "High-speed blender for smoothies." },
  { id: 10, name: "Desk Lamp", price: 800, category: "Furniture", stock: 15, image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80", description: "LED lamp with adjustable brightness." },
];

const EcommerceDemo: React.FC = () => {
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([
    { product: demoProducts[0], qty: 1 },
    { product: demoProducts[1], qty: 2 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(demoProducts[0]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = Array.from(new Set(demoProducts.map(p => p.category)));

  const addToCart = (product: Product, qty: number) => {
    if (qty <= 0) return;
    setCart(prev => {
      const exists = prev.find(c => c.product.id === product.id);
      if (exists) {
        const newQty = Math.min(exists.qty + qty, product.stock);
        return prev.map(c => c.product.id === product.id ? { ...c, qty: newQty } : c);
      }
      return [...prev, { product, qty }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(c => c.product.id !== productId));
  };

  const updateQty = (productId: number, qty: number) => {
    setCart(prev => prev.map(c => c.product.id === productId ? { ...c, qty: Math.min(Math.max(qty,1), c.product.stock) } : c));
  };

  const totalAmount = cart.reduce((sum, c) => sum + c.product.price * c.qty, 0);
  const gst = totalAmount * 0.18;
  const grandTotal = totalAmount + gst;

  const nextPage = () => setPage(prev => Math.min(prev + 1, 5));
  const prevPage = () => setPage(prev => Math.max(prev - 1, 1));

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#f5f7fa", minHeight: "100vh", padding: "20px" }}>
      <style>{`
        .card { background: #fff; padding: 20px; border-radius: 16px; box-shadow: 0 6px 25px rgba(0,0,0,0.08); margin-bottom: 20px; transition: transform 0.3s; }
        .card:hover { transform: translateY(-3px); }
        .button { padding: 10px 16px; margin: 3px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
        .btn-primary { background: linear-gradient(90deg,#4e73df,#2e59d9); color: #fff; }
        .btn-primary:hover { background: linear-gradient(90deg,#2e59d9,#1b3ed6); }
        .btn-danger { background: linear-gradient(90deg,#e74a3b,#c82333); color:#fff; }
        .btn-danger:hover { background: linear-gradient(90deg,#c82333,#a71c29); }
        .input { padding: 8px 10px; border-radius: 6px; border: 1px solid #ccc; width: 100%; font-size: 0.9rem; }
        .product-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 15px; }
        .product-card { display:flex; flex-direction:column; justify-content:space-between; border-radius:12px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.08); transition:all 0.2s; }
        .product-card:hover { transform: translateY(-3px); }
        .product-card img { width:100%; height:150px; object-fit:cover; }
        .product-card-body { padding:10px; }
        .mini-cart { background:#fff; padding:12px 16px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.08); margin-bottom:15px; display:flex; justify-content:space-between; font-weight:600; font-size:0.9rem; }
        table { width:100%; border-collapse: collapse; margin-top:10px; font-size:0.9rem; }
        th, td { border:1px solid #dee2e6; padding:8px; text-align:center; }
        th { background:#343a40; color:#fff; }
        td img { width:60px; height:50px; object-fit:cover; border-radius:6px; }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>E-Commerce Demo</h1>
        <p style={{ color: "#6c757d" }}>Page {page} of 5</p>
      </div>

      {/* PAGE 1: Home */}
      {page === 1 && (
        <div className="card" style={{ textAlign:"center" }}>
          <h2>Welcome to Smart Shop Demo</h2>
          <p>Explore amazing products and real-time interactions!</p>
          <img src="https://images.unsplash.com/photo-1591012911200-7ac9d3cf98ff?auto=format&fit=crop&w=800&q=80" alt="Home" style={{ borderRadius:"16px", marginTop:"15px" }}/>
        </div>
      )}

      {/* PAGE 2: Product Grid */}
      {page === 2 && (
        <>
          <div className="mini-cart">
            <span>Cart Items: {cart.length}</span>
            <span>Total: ₹{grandTotal.toFixed(2)}</span>
          </div>
          <div className="card">
            <div style={{ display:"flex", gap:"10px", marginBottom:"10px" }}>
              <input type="text" placeholder="Search..." className="input" value={search} onChange={e=>setSearch(e.target.value)}/>
              <select className="input" style={{width:"140px"}} value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="product-grid">
              {demoProducts.filter(p => 
                (categoryFilter === "" || p.category === categoryFilter) &&
                (p.name.toLowerCase().includes(search.toLowerCase()))
              ).map(p => {
                const inCart = cart.find(c=>c.product.id===p.id)?.qty || 0;
                const remaining = p.stock - inCart;
                return (
                  <div key={p.id} className="product-card">
                    <img src={p.image} alt={p.name}/>
                    <div className="product-card-body">
                      <h4>{p.name}</h4>
                      <p>₹{p.price}</p>
                      <p>{p.description}</p>
                      <p>Stock: {remaining}</p>
                      <div style={{display:"flex", justifyContent:"space-between"}}>
                        <button className="button btn-primary" onClick={()=>addToCart(p,1)} disabled={remaining===0}>Add</button>
                        <button className="button btn-secondary" onClick={()=>setSelectedProduct(p)}>View</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      {/* PAGE 3: Product Details */}
      {page === 3 && (
        <div className="card" style={{ maxWidth:"400px", margin:"0 auto", textAlign:"center" }}>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-img" style={{ borderRadius:"16px" }}/>
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: ₹{selectedProduct.price}</p>
          <p>Stock: {selectedProduct.stock}</p>
          <button className="button btn-primary" onClick={()=>addToCart(selectedProduct,1)} disabled={selectedProduct.stock===0}>Add to Cart</button>
        </div>
      )}

      {/* PAGE 4: Checkout */}
      {page === 4 && (
        <div className="card">
          <h2>Checkout</h2>
          {cart.length===0 ? <p>Cart is empty</p> :
            <table>
              <thead>
                <tr>
                  <th>Image</th><th>Name</th><th>Category</th><th>Stock</th><th>Qty</th><th>Price</th><th>Subtotal</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(c=>(
                  <tr key={c.product.id}>
                    <td><img src={c.product.image} alt={c.product.name}/></td>
                    <td>{c.product.name}</td>
                    <td>{c.product.category}</td>
                    <td>{c.product.stock}</td>
                    <td>
                      <button className="button btn-primary" onClick={()=>updateQty(c.product.id, c.qty+1)} disabled={c.qty>=c.product.stock}>+</button>
                      {c.qty}
                      <button className="button btn-danger" onClick={()=>updateQty(c.product.id, c.qty-1)} disabled={c.qty<=1}>-</button>
                    </td>
                    <td>₹{c.product.price}</td>
                    <td>₹{(c.product.price*c.qty).toFixed(2)}</td>
                    <td><button className="button btn-danger" onClick={()=>removeFromCart(c.product.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
          {cart.length>0 && (
            <div style={{marginTop:"15px", textAlign:"right"}}>
              <p>Total: ₹{totalAmount.toFixed(2)}</p>
              <p>GST: ₹{gst.toFixed(2)}</p>
              <h4>Grand Total: ₹{grandTotal.toFixed(2)}</h4>
              <button className="button btn-primary" onClick={()=>alert("Order Placed Successfully!")}>Place Order</button>
            </div>
          )}
        </div>
      )}

      {/* PAGE 5: Order Confirmation */}
      {page === 5 && (
        <div className="card" style={{ textAlign:"center" }}>
          <h2>Thank You!</h2>
          <p>Your order has been placed successfully.</p>
          <img src="https://images.unsplash.com/photo-1591012911200-7ac9d3cf98ff?auto=format&fit=crop&w=800&q=80" alt="Order" style={{ borderRadius:"16px", marginTop:"15px" }}/>
        </div>
      )}

      {/* NAVIGATION */}
      <div style={{textAlign:"center", marginTop:"20px"}}>
        {page>1 && <button className="button btn-primary" onClick={prevPage}>Previous</button>}
        {page<5 && <button className="button btn-primary" onClick={nextPage}>Next</button>}
      </div>
    </div>
  )
}

export default EcommerceDemo;

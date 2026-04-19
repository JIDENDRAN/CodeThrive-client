import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  barcode: string;
  stock: number;
  category: string;
}

const SoftwareDemo: React.FC = () => {
  const [page, setPage] = useState(1);
  // Preload demo cart entries using existing productsData
// Preload demo cart entries using existing demoProducts



  const [role, setRole] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // PRELOADED PRODUCTS
  const demoProducts: Product[] = [
    { id: 1, name: "Milk 1L", price: 55, barcode: "1001", stock: 20, category: "Dairy" },
    { id: 2, name: "Bread", price: 40, barcode: "1002", stock: 15, category: "Bakery" },
    { id: 3, name: "Eggs 12pcs", price: 120, barcode: "1003", stock: 30, category: "Poultry" },
    { id: 4, name: "Rice 5kg", price: 450, barcode: "1004", stock: 10, category: "Grains" },
    { id: 5, name: "Sugar 1kg", price: 45, barcode: "1005", stock: 25, category: "Grocery" },
    { id: 6, name: "Paneer 200g", price: 90, barcode: "1006", stock: 12, category: "Dairy" },
    { id: 7, name: "Butter 250g", price: 70, barcode: "1007", stock: 18, category: "Dairy" },
    { id: 8, name: "Tomatoes 1kg", price: 35, barcode: "1008", stock: 22, category: "Vegetables" },
    { id: 9, name: "Onions 1kg", price: 30, barcode: "1009", stock: 20, category: "Vegetables" },
    { id: 10, name: "Apple 1kg", price: 150, barcode: "1010", stock: 15, category: "Fruits" },
    { id: 11, name: "Orange 1kg", price: 120, barcode: "1011", stock: 18, category: "Fruits" },
    { id: 12, name: "Cheese 200g", price: 80, barcode: "1012", stock: 14, category: "Dairy" },
  ];

  const categories = Array.from(new Set(demoProducts.map(p => p.category)));

  // Preload some items for demo
const [cart, setCart] = useState<{ product: Product; qty: number }[]>([
  { product: demoProducts[0], qty: 2 },
  { product: demoProducts[1], qty: 1 },
  { product: demoProducts[2], qty: 3 },
]);


  // CALCULATE TOTALS
  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const gst = totalAmount * 0.18;
  const grandTotal = totalAmount + gst;

  // CART FUNCTIONS
  const addToCart = (product: Product, qty: number) => {
    if (qty <= 0) return alert("Enter a valid quantity!");
    if (qty > product.stock) return alert(`Only ${product.stock} units available!`);

    setCart((prev) => {
      const exists = prev.find((c) => c.product.id === product.id);
      if (exists) {
        const newQty = exists.qty + qty;
        if (newQty > product.stock)
          return prev.map((c) =>
            c.product.id === product.id ? { ...c, qty: product.stock } : c
          );
        return prev.map((c) =>
          c.product.id === product.id ? { ...c, qty: newQty } : c
        );
      }
      return [...prev, { product, qty }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((c) => c.product.id !== productId));
  };

  const nextPage = () => setPage((prev) => Math.min(prev + 1, 3));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", background: "#f9f9f9", minHeight: "100vh" }}>
      <style>{`
        .card { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.05); margin-bottom: 20px; transition: all 0.3s ease; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .button { padding: 8px 14px; margin: 2px; border-radius: 6px; border: none; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
        .btn-primary { background: linear-gradient(90deg, #4e73df, #2e59d9); color: #fff; }
        .btn-primary:hover { background: linear-gradient(90deg, #2e59d9, #1b3ed6); }
        .btn-danger { background: linear-gradient(90deg, #e74a3b, #c82333); color: #fff; }
        .btn-danger:hover { background: linear-gradient(90deg, #c82333, #a71c29); }
        .input { padding: 6px 8px; border-radius: 5px; border: 1px solid #ccc; width: 100%; font-size: 0.85rem; }
        table { width:100%; border-collapse: collapse; margin-top:10px; font-size: 0.85rem; }
        th, td { border:1px solid #dee2e6; padding:8px; text-align:center; }
        th { background:#343a40; color:#fff; }
        .mini-cart { background:#fff; padding:10px 15px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.08); margin-bottom:15px; display:flex; justify-content:space-between; font-size:0.9rem; font-weight:600; }
      `}</style>

      {/* PAGE HEADER */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontWeight: 700 }}>SmartBilling Pro</h1>
        <p style={{ color: "#6c757d" }}>Page {page} of 3</p>
      </div>

      {/* PAGE 1: LOGIN */}
      {page === 1 && (
        <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #4e73df, #2e59d9)", padding: "15px", borderRadius: "8px 8px 0 0", color: "#fff", marginBottom: "15px" }}>
            <h2 style={{ margin: 0 }}>Login</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" placeholder="Username" className="input" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className="button btn-primary" onClick={() => {
              if(!username || !password) return alert("Enter username & password!");
              setPage(1.5);
            }}>Login</button>
          </div>
        </div>
      )}

      {/* PAGE 1.5: ROLE SELECTION */}
      {page === 1.5 && (
        <div className="card" style={{ maxWidth: "400px", margin: "0 auto", textAlign:"center" }}>
          <h2 style={{ marginBottom:"10px" }}>Select Role</h2>
          <div style={{ display:"flex", gap:"10px", justifyContent:"center" }}>
            {["Admin","Cashier","Manager"].map(r => (
              <button key={r} className="button btn-primary" onClick={()=>{setRole(r); setPage(2);}}>{r}</button>
            ))}
          </div>
          {role && <p style={{marginTop:"10px"}}>Selected Role: <strong>{role}</strong></p>}
        </div>
      )}

      {/* PAGE 2: PRODUCT CATALOG */}
      {page === 2 && (
        <>
          <div className="mini-cart">
            <span>Items: {cart.length}</span>
            <span>Total: ₹{grandTotal.toFixed(2)}</span>
          </div>
          <div className="card">
            <h2 style={{fontSize:"1.2rem", marginBottom:"10px"}}>Product Catalog</h2>
            <div style={{ display:"flex", gap:"5px", flexWrap:"wrap", marginBottom:"10px" }}>
              <input type="text" placeholder="Search..." className="input" style={{flex:1}} value={search} onChange={(e)=>setSearch(e.target.value)} />
              <select className="input" style={{width:"120px"}} value={activeCategory} onChange={(e)=>setActiveCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={{maxHeight:"400px", overflowY:"auto"}}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th><th>Barcode</th><th>Price</th><th>Stock</th><th>Category</th>
                    <th>Supplier</th><th>Date</th><th>Time</th><th>Qty</th><th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {demoProducts.filter(p =>
                    (activeCategory==="" || p.category===activeCategory) &&
                    (p.name.toLowerCase().includes(search.toLowerCase()) || p.barcode.includes(search))
                  ).map(p=>{
                    const inCart = cart.find(c=>c.product.id===p.id)?.qty || 0;
                    const remaining = p.stock - inCart;
                    const now = new Date();
                    return (
                      <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.barcode}</td>
                        <td>₹{p.price}</td>
                        <td>{remaining}</td>
                        <td>{p.category}</td>
                        <td>Supplier {p.id}</td>
                        <td>{now.toLocaleDateString()}</td>
                        <td>{now.toLocaleTimeString()}</td>
                        <td>
                          <button className="button btn-primary" style={{fontSize:"0.7rem", padding:"2px 5px", marginRight:"3px"}} onClick={()=>addToCart(p,1)} disabled={remaining===0}>+</button>
                          <button className="button btn-danger" style={{fontSize:"0.7rem", padding:"2px 5px"}} onClick={()=>{
                            const existing = cart.find(c=>c.product.id===p.id);
                            if(!existing) return;
                            if(existing.qty===1) removeFromCart(p.id);
                            else setCart(prev=>prev.map(c=>c.product.id===p.id?{...c, qty:c.qty-1}:c));
                          }} disabled={inCart===0}>-</button>
                        </td>
                        <td>{inCart} / {p.stock}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* PAGE 3: BILLING / INVOICE */}
    {page === 3 && (
  <div className="card">
    <h2 style={{ fontSize:"1.2rem", marginBottom:"10px" }}>Billing / Invoice</h2>
    {cart.length===0 ? <p>No items in cart.</p> :
      <>
        <div style={{maxHeight:"350px", overflowY:"auto"}}>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Barcode</th><th>Price</th><th>Stock</th><th>Category</th>
                <th>Supplier</th><th>Date</th><th>Time</th><th>Qty</th><th>Subtotal</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(c=>{
                const now = new Date();
                return (
                  <tr key={c.product.id}>
                    <td>{c.product.name}</td>
                    <td>{c.product.barcode}</td>
                    <td>₹{c.product.price}</td>
                    <td>{c.product.stock}</td>
                    <td>{c.product.category}</td>
                    <td>Supplier {c.product.id}</td>
                    <td>{now.toLocaleDateString()}</td>
                    <td>{now.toLocaleTimeString()}</td>
                    <td>
                      <button className="button btn-primary" style={{fontSize:"0.7rem", padding:"2px 5px", marginRight:"3px"}} 
                        onClick={()=>addToCart(c.product,1)} disabled={c.qty>=c.product.stock}>+</button>
                      <button className="button btn-danger" style={{fontSize:"0.7rem", padding:"2px 5px"}} 
                        onClick={()=>{
                          if(c.qty===1) removeFromCart(c.product.id);
                          else setCart(prev=>prev.map(item=>item.product.id===c.product.id?{...item, qty:item.qty-1}:item));
                        }}>-</button>
                    </td>
                    <td>₹{(c.product.price*c.qty).toFixed(2)}</td>
                    <td><button className="button btn-danger" style={{fontSize:"0.7rem"}} onClick={()=>removeFromCart(c.product.id)}>Remove</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Invoice Preview */}
        <div style={{ marginTop:"15px", padding:"10px", background:"#f9f9f9", borderRadius:"8px" }}>
          <h3 style={{fontSize:"1rem", marginBottom:"10px"}}>Invoice Preview</h3>
          <div style={{display:"flex", justifyContent:"space-between"}}><span>Total:</span><span>₹{totalAmount.toFixed(2)}</span></div>
          <div style={{display:"flex", justifyContent:"space-between"}}><span>GST (18%):</span><span>₹{gst.toFixed(2)}</span></div>
          <div style={{display:"flex", justifyContent:"space-between", fontWeight:600, marginBottom:"10px"}}><span>Grand Total:</span><span>₹{grandTotal.toFixed(2)}</span></div>
          <button className="button btn-primary" onClick={()=>window.print()}>Print Invoice</button>
        </div>
      </>
    }
  </div>
)}


      {/* NAVIGATION */}
      <div style={{textAlign:"center", marginTop:"20px"}}>
        {page>1 && <button className="button btn-primary" onClick={prevPage}>Previous</button>}
        {page<3 && <button className="button btn-primary" onClick={nextPage}>Next</button>}
      </div>
    </div>
  );
};

export default SoftwareDemo;

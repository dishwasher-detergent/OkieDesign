const ProductCard = () => {
    return (
        <div className="card horizontal fit md:h-96">
            <div className="h-30 md:w-3/5 p-4 flex flex-col">
            <div className="flex-1">
                <div>
                <p className="text-xs text-slate-500">Womans Wear &gt; Jeans</p>
                <div className="mt-4 mb-6">
                    <h2 className="font-bold text-slate-800 text-3xl truncate">Denim Pants</h2>
                    <p className="text-slate-600">Straight Fit Flex Stretch Jeans</p>
                    <p className="badge info mt-2">$77.00</p>
                </div>
                </div>
            </div>
            <div>
                <div className="pb-6 flex flex-col">
                <p className="text-xs text-slate-500">Sizes</p>
                <div className="button_group pill">
                    <button className="button secondary icon">
                    XS
                    </button>
                    <button className="button secondary icon">
                    S
                    </button>
                    <button className="button secondary icon">
                    M
                    </button>
                    <button className="button secondary icon">
                    L
                    </button>
                    <button className="button secondary icon">
                    XL
                    </button>
                </div>
                </div>
                <div className="button_group pill">
                <button className="button full">
                    Add to Cart
                </button>
                <button className="button icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
            <div className="h-60 md:h-full md:w-2/5 relative">
            <div className="badge success top-2 right-2 absolute">New!</div>
            <img alt="Product imagine for jeans" className="w-full h-full object-cover" src="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
        </div>
    )
} 

export default ProductCard;
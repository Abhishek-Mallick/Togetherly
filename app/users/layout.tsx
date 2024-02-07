interface LayoutProps {
    children: React.ReactNode;
};

const layout = ({ children, } : LayoutProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="text-xs p-1 bg-red-500 text-white">
                Reusable navbar
            </nav>
            {children}
        </div>
    );
};

export default layout;
export const SubMenu = ({children, title} : { children: React.ReactNode, title: string }) => (
    <div className="sub-menu">
        <h5 className="sub-menu-title">{title}</h5>
        <ul>
            {children}
        </ul>
    </div>
)
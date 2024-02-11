import './style.css';

export const Head = ({ children }: { children: React.ReactNode }) => (
    <header className='flex w-full justify-between items-center'>
        {children}
    </header>
)
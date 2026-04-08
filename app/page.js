import LikeButton from "./like-button";

function Header({ title }) {
    return (
        <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>
            {title ? title : 'Default title'}
        </h1>
    );
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Header title="Next.js Foundations" />
            
            <section style={{ 
                padding: '1.5rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#94a3b8' }}>Key Contributors</h2>
                <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.75rem' 
                }}>
                    {names.map((name) => (
                        <li key={name} style={{ 
                            padding: '0.75rem 1rem', 
                            backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                        }}>
                            <span style={{ marginRight: '0.75rem', color: '#6366f1' }}>✦</span>
                            {name}
                        </li>
                    ))}
                </ul>
            </section>
            
            <div style={{ marginTop: '1rem' }}>
                <LikeButton />
            </div>
        </div>
    );
}
export default function PageShell({title, subtitle, children}:{title:string;subtitle:string;children:React.ReactNode}){
  return <section className='grid' style={{gap:12}}><div><h1>{title}</h1><p style={{color:'var(--muted)'}}>{subtitle}</p></div>{children}</section>
}

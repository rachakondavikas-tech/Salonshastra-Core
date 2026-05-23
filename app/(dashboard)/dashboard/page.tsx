import PageShell from '@/components/PageShell';

const cards=[['Active Businesses','42'],['Open Opportunities','27'],['Follow-ups Due Today','13'],['Services Attached','66']];
export default function DashboardPage(){return <PageShell title='Dashboard' subtitle='Live ecosystem pulse across Salon Shastra verticals.'><div className='grid grid-4'>{cards.map(c=><div key={c[0]} className='card'><p style={{color:'var(--muted)'}}>{c[0]}</p><h2>{c[1]}</h2></div>)}</div><div className='card'><h3>Next Action Focus</h3><ul><li>Follow up on 5 ChairPe demos.</li><li>Close 3 consulting proposals.</li><li>Schedule 4 recruitment intake calls.</li></ul></div></PageShell>}

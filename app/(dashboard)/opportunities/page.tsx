'use client';
import { FormEvent, useState } from 'react';
import PageShell from '@/components/PageShell';
import StatusBadge from '@/components/StatusBadge';
import { useTable } from '@/lib/crudFactory';
const verticals=['Recruitment','ChairPe','Consulting','Training','Buy-Sell','Academy Partnership','Influencer Marketing','Powered-by Salon Shastra'];
export default function OpportunitiesPage(){const {rows,insert}=useTable('opportunities');const[title,setTitle]=useState('');const[vertical,setVertical]=useState(verticals[0]);const submit=async(e:FormEvent)=>{e.preventDefault();await insert({title,vertical,status:'Open'});setTitle('');};return <PageShell title='Opportunities' subtitle='Track every potential deal by vertical.'><div className='card'><form className='row' onSubmit={submit}><input className='input' placeholder='Opportunity title' value={title} onChange={e=>setTitle(e.target.value)}/><select className='select' value={vertical} onChange={e=>setVertical(e.target.value)}>{verticals.map(v=><option key={v}>{v}</option>)}</select><button className='button'>Add</button></form></div><div className='card'><table className='table'><thead><tr><th>Title</th><th>Vertical</th><th>Status</th></tr></thead><tbody>{rows.map(r=><tr key={r.id}><td>{r.title}</td><td>{r.vertical}</td><td><StatusBadge status={r.status}/></td></tr>)}</tbody></table></div></PageShell>}

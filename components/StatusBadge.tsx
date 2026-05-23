export default function StatusBadge({ status }: { status: string }) {
  const cls = status.toLowerCase().includes('open') ? 'open' : status.toLowerCase().includes('progress') ? 'progress' : 'closed';
  return <span className={`badge ${cls}`}>{status}</span>;
}

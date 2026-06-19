// const applications = [
//   { id: 1, name: "Julianne Moore", initials: "JM", role: "Senior Product Designer", date: "Oct 24, 2023", experience: "6 years", status: "Interviewing" },
//   { id: 2, name: "Robert Downey",  initials: "RD", role: "Backend Engineer",         date: "Oct 23, 2023", experience: "4 years", status: "New" },
//   { id: 3, name: "Emma Stone",     initials: "ES", role: "Marketing Lead",            date: "Oct 22, 2023", experience: "8 years", status: "Reviewing" },
//   { id: 4, name: "Chris Pratt",    initials: "CP", role: "Product Manager",           date: "Oct 21, 2023", experience: "5 years", status: "Rejected" },
// ];

// const statusConfig = {
//   Interviewing: "bg-emerald-100 text-emerald-700 border border-emerald-200",
//   New:          "bg-default-100 text-default-600 border border-default-200",
//   Reviewing:    "bg-warning-100 text-warning-700 border border-warning-200",
//   Rejected:     "bg-danger-100 text-danger-600 border border-danger-200",
// };

// function Badge({ status }) {
//   return (
//     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[status] || statusConfig.New}`}>
//       {status}
//     </span>
//   );
// }

// function Avatar({ initials }) {
//   return (
//     <div className="w-8 h-8 rounded-full bg-default-100 flex items-center justify-center text-xs font-medium text-default-500 shrink-0 ring-1 ring-default-200">
//       {initials}
//     </div>
//   );
// }

// const columns = [
//   { key: "name",       label: "Candidate Name" },
//   { key: "role",       label: "Role" },
//   { key: "date",       label: "Date Applied" },
//   { key: "experience", label: "Experience" },
//   { key: "status",     label: "Status" },
// ];

// export default function RecentApplicationsTable() {
//   return (
//     <div className="w-full bg-content1 border border-divider rounded-xl overflow-hidden shadow-small">

//       {/* Header */}
//       <div className="flex items-center justify-between px-5 py-4 border-b border-divider">
//         <div>
//           <h2 className="text-base font-semibold text-foreground">Recent Applications</h2>
//           <p className="text-xs text-default-400 mt-0.5">{applications.length} candidates total</p>
//         </div>
//         <button className="text-xs font-medium text-primary hover:text-primary-500 transition-colors cursor-pointer">
//           View all
//         </button>
//       </div>

//       {/* Table */}
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-default-50">
//             {columns.map(col => (
//               <th
//                 key={col.key}
//                 className="text-left px-5 py-3 text-xs font-medium text-default-400 uppercase tracking-wider border-b border-divider"
//               >
//                 {col.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-divider">
//           {applications.map(a => (
//             <tr
//               key={a.id}
//               className="hover:bg-default-50/60 transition-colors duration-150 cursor-pointer"
//             >
//               <td className="px-5 py-3.5">
//                 <div className="flex items-center gap-3">
//                   <Avatar initials={a.initials} />
//                   <span className="text-sm font-semibold text-foreground">{a.name}</span>
//                 </div>
//               </td>
//               <td className="px-5 py-3.5 text-sm text-default-600">{a.role}</td>
//               <td className="px-5 py-3.5 text-sm text-default-500">{a.date}</td>
//               <td className="px-5 py-3.5 text-sm text-default-500">{a.experience}</td>
//               <td className="px-5 py-3.5">
//                 <Badge status={a.status} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }
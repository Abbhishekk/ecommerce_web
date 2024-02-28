

const RowSkeleton = () => {
  return (
    <tr className="w-full" >
        <td className="p-5 animate-pulse" ><p className="w-36 h-20 bg-slate-300 rounded" >&nbsp;</p></td>
        <td className="p-5 w-10 animate-pulse"><p className="w-16 h-5 bg-slate-300 rounded"> &nbsp;</p></td>
        <td className="p-5 w-10 animate-pulse"><p className="w-10 h-5 bg-slate-300 rounded"> &nbsp;</p></td>
        <td className="p-5 w-10 animate-pulse"><p className="w-10 h-5 bg-slate-300 rounded"> &nbsp;</p></td>
        <td className="p-5 w-10 animate-pulse"><p className="w-16 h-5 bg-slate-300 rounded"> &nbsp;</p></td>
        <td className="p-5 w-10 animate-pulse"><p className="w-16 h-10 bg-slate-300 rounded"> &nbsp;</p></td>
       
    </tr>
  )
}

export default RowSkeleton


export default function ProductCategory({category}) {
    return (
        <tr key={category}>
          <td key={category} align="center" colSpan={2}><strong>{category}</strong></td>
        </tr>
      );
}
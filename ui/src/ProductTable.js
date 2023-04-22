import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

export default function ProductTable({products}) {

    return (
        <div className='table-container'>
            <table>
                <thead >
                    <tr >
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}
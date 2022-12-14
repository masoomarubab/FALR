import '../../../components/style.css';

const ProductTable = () => {
    const ProductTableData = [
        {
            index: 1,
            OrderID: 6583,
            CustomerName: 'Mark Spence',
            Product: 'Macbook Pro',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Progress',
            BadgeClass: 'badge-progress'
        },
        {
            index: 2,
            OrderID: 4652,
            CustomerName: 'David Rebon',
            Product: 'IPhone X',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Pending',
            BadgeClass: 'badge-pending'
        },
        {
            index: 3,
            OrderID: 7292,
            CustomerName: 'John Doe',
            Product: 'Samsung',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Completed',
            BadgeClass: 'badge-completed'
        },
        {
            index: 4,
            OrderID: 7862,
            CustomerName: 'Jessica Roe',
            Product: 'Exercise Machine',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Stopped',
            BadgeClass: 'badge-stopped'
        },
        {
            index: 5,
            OrderID: 2638,
            CustomerName: 'Malika Jhon',
            Product: 'Machine',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Progress',
            BadgeClass: 'badge-progress'
        },
        {
            index: 6,
            OrderID: 9374,
            CustomerName: 'David Jess',
            Product: 'Laptop',
            ProductDate: '09 / 07 / 2018',
            Price: '672.56$',
            Status: 'Completed',
            BadgeClass: 'badge-completed'
        }
    ]
    return (
        <div className="main-product-table">
            <h4 className="product-table-title">Products Table</h4>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>product</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductTableData.map(({ index, OrderID, CustomerName, Product, ProductDate, Price, Status, BadgeClass }) => (
                            <tr key={index}>
                                <td>{OrderID}</td>
                                <td>===</td>
                                <td>{CustomerName}</td>
                                <td>{Product}</td>
                                <td>{ProductDate}</td>
                                <td>{Price}</td>
                                <td><span className={BadgeClass}>{Status}</span></td>
                                <td>
                                    <ul className="edit-buttons">
                                        <li>
                                            <button className="btn-edit">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="btn-delete">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;
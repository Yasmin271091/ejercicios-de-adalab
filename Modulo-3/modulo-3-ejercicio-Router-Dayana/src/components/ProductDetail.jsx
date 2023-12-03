import { useParams } from "react-router-dom"

const ProductDetail = ({ data }) => {
    const { idproduct } = useParams()

    const productFind = data.find((oneElement) => oneElement.id === idproduct)

    return <article>
        <h2>{productFind.title}</h2>
        <p>{productFind.synopsis}</p>
        {productFind.categories.map((cat) => <span> {cat}</span>)}
        <p>{productFind.categories[0]}</p>
        <p>{productFind.categories[1]}</p>
    </article>
}
export default ProductDetail
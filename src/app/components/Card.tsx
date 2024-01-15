import Image from "next/image"

interface CardProps {
    image: string
    title: string
    description: string
}

export const Card = ({ image, title, description }: CardProps) => {

    return (
        <div className="card">
            <Image src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

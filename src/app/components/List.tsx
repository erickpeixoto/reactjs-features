import Image from "next/image"

import { persons } from "@/app/lib/mocks/persons"
import { getImageUrl } from "@/utils/helpers"

export const List = () => {

    return persons?.map((person) => {
        return (
            <div key={person.id}>
                <p>
                    <Image src={getImageUrl(person)} alt={person.name} width={80} height={50} />
                    {JSON.stringify(person)}
                </p>
            </div>
        )
    }
    )
}
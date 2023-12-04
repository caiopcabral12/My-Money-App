import { Container } from "./style";
import { BsInfoCircleFill } from "react-icons/bs";


export function Table() {
    return (
        <Container>
            <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01.01.2002</td>
                                <td>HOES</td>
                                <td>pussy</td>
                                <td>34</td>
                                <td>
                                    <button>
                                        <BsInfoCircleFill/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>01.01.2002</td>
                                <td>HOES</td>
                                <td>pussy</td>
                                <td>34</td>
                                <td>
                                    <button>
                                        <BsInfoCircleFill/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>01.01.2002</td>
                                <td>HOES</td>
                                <td>pussy</td>
                                <td>34</td>
                                <td>
                                    <button>
                                        <BsInfoCircleFill/>
                                    </button>
                                    </td>
                            </tr>
                            <tr>
                                <td>01.01.2002</td>
                                <td>HOES</td>
                                <td>pussy</td>
                                <td>34</td>
                                <td>
                                    <button>
                                        <BsInfoCircleFill/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

        </Container>
    )
}
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function CharacterItem({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    created,
}) {
    console.log('Episode is', episode);
    const firstfiveEpisodes = episode.slice(0, 5);
    console.log('FirstEpisodes are', firstfiveEpisodes);
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h3
                        css={{
                            color: '#000',
                            marginBottom: '2.5rem',
                            marginTop: '2.5rem',
                            textDecoration: 'underline',
                        }}
                    >
                        {name}
                    </h3>
                </Col>
                <Table
                    striped
                    hover
                    responsive
                    css={{
                        border: '2px solid black',
                        color: '#000',
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        fontWeight: '500',
                        width: '75%',
                        margin: '0 auto',
                    }}
                >
                    <tbody>
                        <tr>
                            <td>Id:</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{status}</td>
                        </tr>
                        <tr>
                            <td>Species:</td>
                            <td>{species}</td>
                        </tr>
                        <tr>
                            <td>Type:</td>
                            <td>{type}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Origin:</td>
                            <td>{origin.name}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>
                                <p>id: {location.id}</p>
                                <p>name: {location.name}</p>
                                <p>type: {location.type}</p>
                                <p>dimension: {location.dimension}</p>
                                <p>
                                    created:
                                    <Moment
                                        format="YYYY-MM-DD HH:mm"
                                        date={location.created}
                                        css={{
                                            marginLeft: '0.5rem',
                                        }}
                                    />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>First 5 Episodes:</td>
                            <td>
                                {firstfiveEpisodes.map((episode, index) => (
                                    <Link to={'/episode/' + episode.id}>
                                        <p key={index}>{episode.name}</p>
                                    </Link>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Created:</td>
                            <td>
                                <Moment
                                    format="YYYY-MM-DD HH:mm"
                                    date={created}
                                    css={{
                                        marginLeft: '0.5rem',
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td>
                                <img
                                    src={image}
                                    alt="Rick and Morty"
                                    css={{
                                        border: '1px solid #000',
                                        width: '60%',
                                        height: 'auto',
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

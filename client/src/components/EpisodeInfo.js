/** @jsxRuntime classic */
/** @jsx jsx */
import { gql, useQuery } from '@apollo/client';
import { jsx } from '@emotion/react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { showNotification as show } from '../helpers/helpers';
import Notification from './Notification';

const GET_EPISODE = gql`
    query Episode($search: ID!) {
        episodesByIds(ids: [$search]) {
            id
            name
            air_date
            characters {
                name
                image
            }
            created
        }
    }
`;

export default function EpisodeInfo(props) {
    let { id } = props.match.params;
    id = parseInt(id);
    const [showNotification, setShowNotification] = React.useState(false);
    const { loading, error, data } = useQuery(GET_EPISODE, {
        variables: { search: id },
    });
    let episode = [];
    if (loading)
        return (
            <ReactLoading
                type={'spin'}
                color={'blue'}
                height={'100px'}
                width={'100px'}
                css={{
                    position: 'fixed',
                    top: '40%',
                    left: '10%',
                }}
            />
        );
    if (error) return <Notification showNotification={showNotification} />;
    if (data.episodesByIds) {
        episode = data.episodesByIds[0];
    } else {
        show(setShowNotification);
    }

    const { name, air_date, characters, created } = episode;

    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h3
                        css={{
                            color: '#000',
                            marginBottom: '3.0rem',
                            marginTop: '1.0rem',
                            textDecoration: 'underline',
                        }}
                    >
                        {name}
                    </h3>
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
                            margin: '0 auto 0.5rem',
                        }}
                    >
                        <tbody>
                            <tr>
                                <td>Id:</td>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <td>Air Date:</td>
                                <td>{air_date}</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <h4
                                        css={{
                                            color: '#000',
                                            margin: '0.5rem auto 1.5rem',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        Characters
                                    </h4>
                                    {characters.map((character, index) => (
                                        <div className="responsive">
                                            <div
                                                key={index}
                                                className="gallery"
                                            >
                                                <img
                                                    src={character.image}
                                                    alt="Rick and Morty"
                                                />
                                                <div class="desc">
                                                    <p
                                                        css={{
                                                            whiteSpace:
                                                                'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow:
                                                                'ellipsis',
                                                        }}
                                                    >
                                                        {character.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Link
                to="/"
                css={{
                    position: 'fixed',
                    top: '30%',
                    left: '10px',
                }}
            >
                <Button variant="primary"> Back</Button>
            </Link>
        </Container>
    );
}

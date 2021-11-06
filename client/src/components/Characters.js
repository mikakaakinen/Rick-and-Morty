/** @jsxRuntime classic */
/** @jsx jsx */
import { gql, useQuery } from '@apollo/client';
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactLoading from 'react-loading';
import { showNotification as show } from '../helpers/helpers';
import CharacterItem from './CharacterItem';
import Notification from './Notification';

const GET_CHARACTERS = gql`
    query Characters($count: Int! = 1) {
        characters(page: $count) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                origin {
                    name
                }
                location {
                    id
                    name
                    type
                    dimension
                    created
                }
                image
                episode {
                    id
                    name
                }
                created
            }
        }
    }
`;

function Characters() {
    const [count, setCount] = useState(1);
    const [showNotification, setShowNotification] = React.useState(false);
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { count: count },
    });
    let characters = {};

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

    if (data.characters) {
        characters = data.characters;
    } else {
        show(setShowNotification);
    }

    const { info, results } = characters;

    return (
        <Container fluid>
            <Row>
                <Row>
                    <Col className="text-center">
                        <h5
                            css={{
                                color: '#000',
                                marginBottom: '2.0rem',
                                marginTop: '1.0rem',
                            }}
                        >
                            Current page: {count}/{info.pages}
                        </h5>
                    </Col>
                </Row>
                <Col className="text-center">
                    <Button
                        css={{
                            marginRight: '1.5rem',
                        }}
                        onClick={() => {
                            if (count > 1) setCount((count) => count - 1);
                        }}
                        variant="primary"
                    >
                        Prev
                    </Button>
                    <Button
                        onClick={() => {
                            if (count < 34) setCount((count) => count + 1);
                        }}
                        variant="primary"
                    >
                        Next
                    </Button>
                    {results.map(
                        (
                            {
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
                            },
                            index
                        ) => (
                            <CharacterItem
                                id={id}
                                name={name}
                                status={status}
                                species={species}
                                type={type}
                                gender={gender}
                                origin={origin}
                                location={location}
                                image={image}
                                episode={episode}
                                created={created}
                            />
                        )
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Characters;

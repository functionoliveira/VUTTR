import React from 'react';
import ToolsList from '../components/ToolsList';
import { Container } from 'react-bootstrap';
 
export default function Home() {
    return (
        <main>
            <Container>
                <h1>VUTTR</h1>
                <h2>Very Useful Tools to Remember</h2>
                <ToolsList></ToolsList>
            </Container>
        </main>
    );
}
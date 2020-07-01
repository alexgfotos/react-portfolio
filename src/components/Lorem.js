import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { sizing } from '@material-ui/system';

export const Lorem = () => {
    return (
        <Container maxWidth="lg">
        
                <Box
                    p={0}
                    position="relative"
                    top={10}
                    left=""
                    width={"25%"}
                ><img style={{ width: "100%" }} src="assets/images/me and mina.jpg" alt-text="me and my dog Mina doing it for the gram"></img>
                </Box>
                <p><strong>Hello!</strong> My name is Alejandro Gonzalez and welcome to my portfolio site. I currently work as a
        Photography Instructor, Career & Technical Education department chair, Web Editor, and Teacher Technology
        Liaison at Tucson High Magnet School. I am also a freelance photographer, cacti aficionado, and soon to be a
        dad! I love teaching photography and working with students, it is satisfying to help them develop through the
        art of photography.
        I was born in Mexico but I have lived in Tucson, AZ since I was five years old. I graduated from Amphitheater
        High School, got my BFAs in Education & Photography from the University of Arizona in 2009 and then returned for
        my Masters in Educational Leadership in 2017. I am (with much difficulty) learning how to code in this intensive
        bootcamp so I can hopefully transition to a career where I can wear less hats and better provide for my family.
        I met my wife while teaching (she was the art teacher) and we married in 2013. This June we will be expecting
        our first child, a boy. I am also passionate about photography, mountain biking, and the cultivation of rare
        cacti and succulents from around the world!</p>
        </Container>
    )
}

export default Lorem
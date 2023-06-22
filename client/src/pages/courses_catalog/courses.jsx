
import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { useState, useEffect } from "react";


const theme = createTheme({
    palette: {
        background: {
            paper: '#92a8dl',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },


    },
});

const Courses = () => {

    const ar = [
        'one',
        'two',
        'three'
    ];
    // const [data, setData] = useState();
    const [images, setImages] = useState();
    const [date, setdate] = useState();

    useEffect(() => {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setImages(data);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    const [courses, setCourses] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/courses", {
            // mode: 'no-cors',
        }).then((res) => {
            return res.json();
        })
            .then((data) => {
                console.log(data);
                setCourses(data);
            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            { courses ? courses.map((item, index) => {
                return <><Box
                    sx={{
                        bgcolor: '#f5f5f5',
                        boxShadow: 3,
                        borderRadius: 2,
                        p: 2,
                        maxWidth: 300,

                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                            transform: 'scale(1.02)',
                        },


                    }}
                >
                    <Box sx={{ color: 'text.secondary', textAlign: 'center' }} >
                        {/* <img src="https://images.unsplash.com/photo-1686656446001-41af3994216b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=60" alt="" style={{
                            margin:'auto'
                        }}/> */}
                        <img src={images ? images.message : ''} alt="" style={{
                            margin: 'auto',
                            maxWidth: '100%'
                        }} />
                    </Box>
                    <Box sx={{ color: 'text.primary', fontSize: 20, fontWeight: 'medium' }}>
                        <h4>{item.Instructor}</h4>
                        <p>
                            {item.Course_description}
                        </p>
                    </Box>

                    <Box
                        sx={{
                            color: 'success.dark',
                            display: 'inline',
                            fontWeight: 'bold',
                            mx: 0.5,
                            fontSize: 14,
                        }}
                    >
                        +18.77%
                    </Box>
                    <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                        vs. last week
                        <div className="row" style={{
                            display: "flex"
                        }}>
                        </div>
                    </Box>
                </Box>
                </>
            }) : ''}
        </ThemeProvider>
    );
}

export default Courses;
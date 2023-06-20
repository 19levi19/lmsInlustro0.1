import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Star, Person } from '@mui/icons-material';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: 'calc(33.33% - 16px)',
  height: 'auto',
  margin: '8px',
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardHeader = styled(CardContent)(({ theme }) => ({
  backgroundColor: 'rgba(66, 95, 174, 0.745)',
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '0.875rem',
}));

const StyledCardBody = styled(CardContent)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  display: 'flex',
  alignItems: 'flex-end',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(0.5),
}));

const StyledListItemIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.main,
}));

function CourseDetails() {
  const courses = [
    {
      title: 'Introduction to React',
      instructor: 'John Doe',
      syllabus: 'Learn the basics of React and build interactive web applications.',
      rating: 5,
    },
    {
      title: 'JavaScript Fundamentals',
      instructor: 'Jane Smith',
      syllabus: 'Master the core concepts of JavaScript and enhance your coding skills.',
      rating: 5,
    },
    {
      title: 'HTML & CSS Mastery',
      instructor: 'Mark Johnson',
      syllabus: 'Become proficient in HTML and CSS to create stunning web pages.',
      rating: 5,
    },
    {
      title: 'Python for Data Science',
      instructor: 'Emily Wilson',
      syllabus: 'Learn Python programming for data analysis and machine learning.',
      rating: 5,
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star fontSize="small" key={i} />);
    }
    return stars;
  };

  return (
    <StyledContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.map((course, index) => (
          <StyledCard key={index}>
            <StyledCardHeader>
              <StyledTitle variant="subtitle2">{course.title}</StyledTitle>
            </StyledCardHeader>
            <StyledCardBody>
              <Typography variant="body2" gutterBottom>
                <Person fontSize="small" /> Instructor: {course.instructor}
              </Typography>
              <Typography variant="body2" color="textSecondary" fontSize="0.75rem">
                {course.syllabus}
              </Typography>
              <Divider style={{ margin: '8px 0' }} />
              <StyledList>
                {renderStars(course.rating)}
              </StyledList>
            </StyledCardBody>
          </StyledCard>
        ))}
      </div>
    </StyledContainer>
  );
}

export default CourseDetails;

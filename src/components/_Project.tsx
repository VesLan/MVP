import React, { FC } from 'react';
import { Box, CardMedia } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const superiorMd_1 = `
**A stylish implementation of a product detail page; designed with accessibility, functionality, and interactivity as core principles.**

![Top Language](https://img.shields.io/github/languages/top/HR-FEC-Team2/superior)
![Last Commit](https://img.shields.io/github/last-commit/HR-FEC-Team2/superior)
![Commit Activity](https://img.shields.io/github/commit-activity/m/HR-FEC-Team2/superior)

### Written in
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Bundled with
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

### Powered by
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### Tested with
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Contributors
* [boltonlin](https://github.com/boltonlin)
* [eriknewland](https://github.com/eriknewland)
* [jerrodvarney](https://github.com/jerrodvarney)
* [VesLan](https://github.com/VesLan)

## Technical Description
Front-end implementation of a product detail page utilizing React. While this is a front-end focused application, a back-end implementation is included for preventing access to API keys. This application communicates with a remote database API in order to display detailed information about a featured product, its various styles, related items, ratings, reviews, questions, and answers.

## Overview
### Description
Product overview of a select product. Allows the user to add to cart, add to wishlist, view and inspect galleries of the featured item and its various styles.

### Technical Features
* Synchronized carousel and gallery navigation
* Responsive pan & zoom on inspect
`;

const superiorMd_2 = `
## Ratings and Reviews
### Description
A dashboard outlining various characteristics and ratings regarding the product as well as a list of detailed user accounts of the product and its various characteristics depending on the type of item selected.

### Technical Features
* A suite of filters and sorting options that apply to the entire list of reviews without refresh
* Review submission form that accepts up to five photos via drag and drop
`;

const superiorMd_3 = `
## Related Items and Comparison
### Description
A catalogue of items displayed in a carousel related to the selected product, as well as an outfit tracker which gives the user easy access to view their desired items side-by-side

### Technical Features
* Carousels within carousels allows users to change the display of each related item to any of the photos within their galleries
* Outfit tracker persists between page loads without use of a database
`;

const superiorMd_4 = `
### Description
A dashboard outlining various characteristics and ratings regarding the product as well as a list of detailed user accounts of the product and its various characteristics depending on the type of item selected.

### Technical Features
* A suite of filters and sorting options that apply to the entire list of reviews without refresh
* Review submission form that accepts up to five photos via drag and drop
`;

import { IProject } from '../interfaces/IProject';

const Project: FC<IProject> = ({ showMd, projIndex }) => {
  return (
    <React.Fragment>
      {showMd && (
        <>
          <Box sx={{ m: 3, w: 400 }}>
            <img
              src="https://user-images.githubusercontent.com/116389520/218278997-59085a0f-ada8-44f6-be09-f5f9dc122ab9.png"
              style={{
                width: '20%',
              }}
            />
            {
              // eslint-disable-next-line react/no-children-prop
              <ReactMarkdown children={superiorMd_1} />
            }
            <img
              src="https://user-images.githubusercontent.com/116389520/218283268-3889ff76-89e2-4898-a4ed-d239c292e2e1.jpg"
              style={{
                width: '70%',
              }}
            />
            {
              // eslint-disable-next-line react/no-children-prop
              <ReactMarkdown children={superiorMd_2} />
            }
            <img
              src="https://user-images.githubusercontent.com/116389520/218283268-3889ff76-89e2-4898-a4ed-d239c292e2e1.jpg"
              style={{
                width: '70%',
              }}
            />
            {
              // eslint-disable-next-line react/no-children-prop
              <ReactMarkdown children={superiorMd_3} />
            }
            <img
              src="https://user-images.githubusercontent.com/116389520/218284010-eb224c46-556f-4b31-8bed-2bcac2a2e5e2.png"
              style={{
                width: '70%',
              }}
            />
            {
              // eslint-disable-next-line react/no-children-prop
              <ReactMarkdown children={superiorMd_4} />
            }
            <img
              src="https://user-images.githubusercontent.com/116389520/218284466-7e1243cf-beb7-4e8c-be22-2590cb51ee4f.png"
              style={{
                width: '70%',
              }}
            />
          </Box>
        </>
      )}
      {projIndex === 0 && !showMd && (
        <Box
          sx={{
            mx: '5%',
            my: 3,
            width: '90%',
            height: 800,
            padding: 2,
            border: '1px solid black',
          }}
        >
          <CardMedia
            component="iframe"
            src="http://localhost:3000/"
            title="Test"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      )}
    </React.Fragment>
  );
};

export default Project;

#rent-a-campervan app

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

1. Based on the FIGMA layout
   https://www.figma.com/design/fnMWH0eBB7NnoqdAiiKWsQ/Test?node-id=0-1, an
   application was implemented that informs about the rental of a camper.
   Language - EN, market - Ukraine.
2. On the first page of the catalog, 4 ads are displayed, and the rest after
   clicking the Load more button.
3. After clicking the heart-shaped button on the ad card, it is added to the
   list of favorites, and the color of the button changes accordingly
   (background: #D84343).
4. When updating the page, the final result of the user's actions is recorded.
   If you add the map to favorites and refresh the page, the button remains in
   the "favorite ad" state with the corresponding color.
5. If you press the heart button again, the card will be removed from the
   favorites list and the button color will change to the original color.
6. If you click the "Show more" button, a modal window will open with detailed
   information about the campaign.
7. The modal window is closed by clicking on the button in the form of a
   "cross", clicking on the background and pressing the Esc key.
8. The modal window contains information about the characteristics of the camper
   and reviews about it. Information about the drawing depends on the state of
   the active tab.
9. The modal window also contains a form for booking a camper, which consists of
   the fields name, email address, date of booking and comment. The fields Name,
   E-mail and Date of reservation are mandatory and check the validity of the
   entered values.

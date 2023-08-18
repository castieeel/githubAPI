import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
gap: 20px;
padding-top: 20px;
padding-left: 20px;
`

export const Title = styled.h1`
 color: #7f7679;
 font-size: 28px;
`

export const Input = styled.input`
 font-size: 28px;
 padding-left: 10px;
 width: 400px;
 border: 5px solid;
 border-image: linear-gradient(45deg, purple, orange) 1;
`
export const LogoImage = styled.img`
width: 32px;
`
export const ListUsers = styled.ul`
margin-left: 0;
list-style: none;
counter-reset: li;
font-family: calibri;
font-size: 28px;
padding-left: 50px;
`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 20px;
`
export const InputDiv = styled.div` 
display: flex;
flex-direction: column;
gap: 10px;
padding-left: 50px;
padding-bottom: 10px;
`
export const Label = styled.div` 
font-size: 20px;
color: darkslategray;
`
export const Pag = styled.div` 
display: flex;
padding-left: 50px;
justify-content: space-evenly;
width: 450px;
`

export const Button = styled.button`
    background:#fff;
    width: 100px;
    display:block;
    height:33px;
    border:1px solid #000;
     margin: 20px auto;
    font-family: 'Dosis', sans;
    font-size: 18px;
    font-weight:200;
    color:#000;
    text-transform:uppercase;
    text-decoration:none;
    text-align:center;
    opacity:.8;
    letter-spacing: 1px;
    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
     -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
       -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
          transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
&:hover{
    width:225px;
    height:33px;
    border:1px solid teal;
    margin: 20px auto;
    opacity:1;
    letter-spacing: 4px;
    &::-webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
     -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
       -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
          transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
  }
`
export const ListItems = styled.li`
    width: 400px;
    height: 100px;
    border: 5px solid;
    border-image: linear-gradient(45deg, purple, orange) 1;
    padding-left: 20px;
    margin-bottom: 1em;
    align-items: center;
    display: flex;
    gap: 20px;
}`

export const PageNum = styled.p`
padding-top: 25px;
font-size: 20px;
padding-left: 170px;
padding-right: 170px;
`
export const Avatar = styled.img`
width: 45px;
border-radius: 50%;
border: 2px solid #7f767978;
`
export const Repositories = styled.div`
width: 500px;
height: 700px;
border: 5px solid;
border-image: linear-gradient(45deg, purple, orange) 1;
overflow-y: scroll;
padding-left: 10px;
`

export const RepTitle = styled.p`
font-size: 20px;
color: #7f7679;
padding-bottom: 10px;
`
export const RepDiv = styled.div`
padding-top: 50px;
`
export const Sort = styled.div`
display: flex;
gap: 20px;
`

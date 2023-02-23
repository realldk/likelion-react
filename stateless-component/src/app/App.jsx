import React, { useState } from 'react';
import classes from './App.module.css';
import { Button, A11yHidden, Nav } from '@/components';

function App() {
  const [navList] = useState([
    { id: 'item-1', text: '과자', to: '#snack' },
    { id: 'item-2', text: '음료', to: '#beverage' },
    { id: 'item-3', text: '우유', to: '#milk' },
    { id: 'item-4', text: '과일', to: '#fruit' },
    { id: 'item-5', text: '치킨', to: '#chicken' },
  ])

  return (
    <div className={classes.container}>
      <SkipToContent to="#snack"></SkipToContent>
      <Nav as="h3" headline="상품 목록" list={navList} />
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>
      <div role="group" className={classes.buttonGroup}>
        <Button>회원가입</Button>
        <Button secondary>로그인</Button>
        <section id="snack">
          <A11yHidden as='h2'>맛있는 과자~</A11yHidden>
          <p><A11yHidden as='a' href="#invisible" focusable>Lorem ipsum</A11yHidden> <a href="#dolor">dolor</a> sit amet consectetur adipisicing elit. Error similique unde vitae? Quibusdam esse voluptates similique odit facere, animi optio iste explicabo pariatur a omnis dignissimos itaque deserunt ea voluptate.</p>
          <p>Beatae voluptas rem possimus corrupti, iste, eligendi unde adipisci atque sint temporibus ab, quam aliquam. Repellat ipsam magni officiis consequatur nobis quisquam, nam corrupti non aut praesentium assumenda autem id.</p>
          <p>Obcaecati ad sed quidem quasi porro ipsum cumque minima saepe quos, doloremque quia earum eligendi architecto facere, beatae fugiat at dicta assumenda ex? Voluptates, consequuntur possimus. Inventore minus ducimus eveniet.</p>
          <p>Esse asperiores facere omnis iste perferendis. Quas reiciendis perferendis veritatis a debitis architecto, dolores reprehenderit expedita mollitia aliquid non nemo rerum illo voluptas corporis cupiditate consequatur suscipit aperiam perspiciatis minus.</p>
          <p>Reiciendis suscipit quae repudiandae adipisci, unde quis aspernatur alias voluptatum consectetur ex quia possimus voluptates fugiat soluta, beatae quod voluptatibus quidem! Sunt deleniti officia excepturi velit? Nulla quia dolore voluptates?</p>
          <p>Expedita fugiat sit non deserunt, quo quae molestiae odit modi repudiandae veniam sint, suscipit quisquam saepe, eum voluptatem facilis quasi consequatur minima quidem. Ex, nulla? Labore inventore maiores doloremque quos.</p>
        </section>
      </div>
    </div>
  );
}

export default App;

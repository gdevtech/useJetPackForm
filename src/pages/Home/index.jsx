import React from 'react';
import SignUpForm from '../../templates/SignUpForm';
import { MainContent } from '../../styles/MainContent.style';
import { SectionCenter } from '../../styles/SectionCenter.style';

export default function Home() {
  return(
    <MainContent>
    <aside>
      <h1>Welome to this form</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, aliquam cumque cupiditate error explicabo fugiat nam natus non odio omnis perferendis, provident quam, quidem suscipit unde vero vitae?</p>
      <p><img src="https://cdn.sanity.io/images/0p0c88r6/production/f483f8c928567a866c3387b6e663a439140d4f33-278x341.svg?w=1200&auto=format" /></p>
    </aside>
    <SectionCenter>
      <article>
        <SignUpForm />
      </article>
    </SectionCenter>
    </MainContent>
)
}
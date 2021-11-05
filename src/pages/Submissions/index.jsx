import React, { useContext, useEffect, useState } from 'react';
import { DispatchContext, StateContext } from '../../state/context';
import { FORM_SUBMISSIONS } from '../../state/reducer';

import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { MainContent } from '../../styles/MainContent.style';
import { SectionCenter } from '../../styles/SectionCenter.style';

export default function Submissions() {
  const[submissionList, setSubmissionList] = useState([]);
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions'));
    if(formSubmissions) {
      setSubmissionList(formSubmissions);
      dispatch({type: FORM_SUBMISSIONS, payload: formSubmissions});
    } else {
      setSubmissionList(state);
    }
  },[])

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
    },
    {
      name: 'Date of birth',
      selector: row => row.dateOfBirth,
    },
    {
      name: 'Marital Status',
      selector: row => row.marital,
    },
    {
      name: 'Arbitrary Integer',
      selector: row => row.arbitraryInteger,
    },
  ];

  const data = submissionList;

  return(
    <MainContent>
      <aside>
        <Link to="/">← Back to form</Link>
        <h1>Form Submissions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, aliquam cumque cupiditate error explicabo fugiat nam natus non odio omnis perferendis, provident quam, quidem suscipit unde vero vitae?</p>
        <p><img src="https://cdn.sanity.io/images/0p0c88r6/production/f483f8c928567a866c3387b6e663a439140d4f33-278x341.svg?w=1200&auto=format" /></p>
      </aside>
      <SectionCenter align="top">
        {submissionList.length > 0 ? <DataTable
          columns={columns}
          data={data}
          className={'custom-table'}
          highlightOnHover
          pagination
        /> : <h1>No Submissions Have Been Entered</h1>}

      </SectionCenter>

    </MainContent>

  )
}
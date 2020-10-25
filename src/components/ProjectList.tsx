import React from 'react';
import { useQuery, gql } from '@apollo/client';


const PROJECT_LIST = gql`
query {
  projects {
    data {
      name
      number
      manager {
        first_name
        last_name
      }
      parent {
        name
        number
      }
    }
  }
}
`;

function ProjectList() {
  const { loading, error, data } = useQuery(PROJECT_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  //console.log(data.projects.data);

  return (
    <ul>
      {data.projects.data.map((project: any, index: number) => {
        //return <li>test</li>
        return (
          <li key={index}>
            Project Name: {project.name} <br />
            Project Number: {project.number} <br />
            Manager: {project.manager.first_name} {project.manager.last_name} <br />
            Parent Project: {project["parent"]?.name}<br />
            <br />
          </li>
        );
      })}
    </ul>
  );
  //return data.map(({ project }) => (
    //<div key={project.name}>
      //<p>
        //test
      //</p>
    //</div>
  //));
}

export default ProjectList;

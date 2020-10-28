import React from 'react';
import { useQuery, gql } from '@apollo/client';



function ProjectDetail({match}:any) {

  let PROJECT_DETAIL = gql`
    query {
      project (id: ${match.params.id}) {
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
  `;

  let { loading, error, data } = useQuery(PROJECT_DETAIL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  const project = data.project;

  return (
    <>
      {project && <div>
        <h1>Project Detail</h1>
        Project: {project.name}
      </div>}
    </>
  );
}

export default ProjectDetail;


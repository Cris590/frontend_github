import { useEffect, useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { githubApi } from '../../api';
import { CommitInterface } from '@/interfaces';
import { Commit, Layout } from '../../components';


interface Props {
    branches: string[];
    repo: string
}

const CommitHistoryByProject: NextPage<Props> = ({ branches, repo }) => {

    const [commits, setCommits] = useState<CommitInterface[]>([])
    const [branch, setBranch] = useState<string>('')

    useEffect(() => {
        if (branch !== '') {
            console.log('Si entre', branch)
            getCommits()
        }
    }, [branch])

    useEffect(() => {
        setCommits([])
        setBranch('')
    }, [repo])

    const getCommits = async () => {
        let body = {
            repo,
            branch
        }
        const { data: updatedCommits } = await githubApi.post<CommitInterface[]>('/commits/', body);
        if (updatedCommits.length > 0) {
            setCommits(updatedCommits);
        }
    }

    const handleSelectChange = (event: any) => {
        setBranch(event.target.value);
    };


    return (
        <>
            <Layout title={repo}>
                <div>
                    <p style={{
                        fontSize:'x-large',
                        fontWeight:'bold',
                    }}> {repo === 'backend_github' ? 'Backend Commits' : 'FrontEnd Commits' }</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:'200px'
                    }}>
                        <label htmlFor="quick-select">Select Branch:</label>
                        <select 
                            style={{
                                borderRadius:'15px',
                                margin:'15px 0px',
                                height:'25px',
                                padding:'5px'
                            }}
                             id="quick-select" value={branch} onChange={handleSelectChange}>
                            <option 
                            
                                style={{
                                    borderRadius:'5px'
                                }}
                            >Select...</option>
                            {
                                branches?.map((branch) => <option key={branch} value={branch}>{branch}</option>)
                            }
                        </select>
                        <p>Selected Branch: {branch}</p>
                    </div>
                </div>

                <div>
                    {
                        commits?.map((commit) => <Commit key={commit.sha} commit={commit}/>)
                    }
                </div>
            </Layout>

        </>
    )
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
        paths: ['frontend_github', 'backend_github'].map(project => ({
            params: { project }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { project } = params as { project: string };

    const { data: branches } = await githubApi.get<string[]>('/branches/' + project);

    return {
        props: {
            branches,
            repo: project
        }
    }
}





export default CommitHistoryByProject;

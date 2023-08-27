export interface GetBranchInterface {
    repo: string;
    branch: string;
}

export interface CommitInterface {
    sha:      string;
    author:   string;
    email:    string;
    date:     Date;
    message:  string;
    html_url: string;
}
  
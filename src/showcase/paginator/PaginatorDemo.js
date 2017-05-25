import React, {Component} from 'react';
import {Link} from 'react-router';
import {Paginator} from '../../components/paginator/Paginator';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class PaginatorDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Paginator rows={10} totalRecords={120} rowsPerPageOptions={[10,20,30]}></Paginator>
                </div>
                <PaginatorDoc></PaginatorDoc>
            </div>
        );
    }
}

export class PaginatorDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Paginator} from 'primereact/components/paginator/Paginator';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Paginator is defined using Paginator element.</p>
<CodeHighlight className="language-markup">
{`
<Paginator></Paginator>

`}
</CodeHighlight>

            <h3>Rows and TotalRecords</h3>
            <p>Rows and TotalRecords define how many pages the paginator should display. Paginator below will have 10 pages.</p>
<CodeHighlight className="language-markup">
{`
<Paginator rows={10} totalRecords={120}></Paginator>

`}
</CodeHighlight>

             <h3>Rows Per Page</h3>
            <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values.</p>
<CodeHighlight className="language-markup">
{`
<Paginator rows={10} totalRecords={120} rowsPerPageOptions={[10,20,30]}></Paginator>

`}
</CodeHighlight>
            <h3>Attributes</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>totalRecords</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Number of total records.</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Data count to display per page.</td>
                        </tr>
                        <tr>
                            <td>first</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Zero-relative number of the first row to be displayed.</td>
                        </tr>
                        <tr>
                            <td>pageLinkSize</td>
                            <td>number</td>
                            <td>5</td>
                            <td>Number of page links to display.</td>
                        </tr>
                        <tr>
                            <td>rowsPerPageOptions</td>
                            <td>array</td>
                            <td>null</td>
                            <td>Array of integer values to display inside rows per page dropdown.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onPageChange</td>
                            <td>event.page: New page number <br/>
                                event.first: Index of first record <br/>
                                event.rows: Number of rows to display in new page <br/>
                                event.page: Index of the new page <br/>
                                event.pageCount: Total number of pages 
                            </td>
                            <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ui-paginator</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-first</td>
                            <td>First page element.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-prev</td>
                            <td>Previous page element.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-pages</td>
                            <td>Container of page links.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-page</td>
                            <td>A page link.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-next</td>
                            <td>Next pge element.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-last</td>
                            <td>Last page element.</td>
                        </tr>
                        <tr>
                            <td>ui-paginator-rpp-options</td>
                            <td>Rows per page dropdown.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class PaginatorDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Paginator rows={10} totalRecords={120} rowsPerPageOptions={[10,20,30]}></Paginator>
                </div>
                <PaginatorDoc></PaginatorDoc>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
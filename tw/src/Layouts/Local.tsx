import { List } from "antd";
import { Content } from "antd/lib/layout/layout"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useRootStore } from ".."
import { IContentModel } from '../Interface/Person';
import { CardCustom } from './CardCustom';
import { Note } from '../Notes/Notes';

export const Local = observer(() => {

    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <main>
            <Content style={ { padding: '0 50px' } }>

                <div>

                    <div>
                        {
                            contents.map((content: IContentModel) => {
                                return(
                                    <CardCustom key={ content.id } content={ content } />
                                )
                            })
                        }
                    </div>

                    <br />

                    <div>
                        {
                            contents_notes.map((content: IContentModel) => {
                                return(
                                    <List.Item>

                                        <Note key={ content.id } content={ content } />

                                    </List.Item>
                                )
                            })
                        }
                    </div>

                </div>
            </Content>
        </main>
    )
})
import React from 'react'
import { useEffect,useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { InitialUserStatus } from '../Type';
import Chat from '../components/Chat/Chat';
import { Login } from '@mui/icons-material';
import { CollectionReference, DocumentData, Query, QuerySnapshot, collection ,onSnapshot,query, orderBy, Timestamp, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '../firebase';


interface Messages {
    timestamp: Timestamp;
    message: String;
    user: null | {
        uid: string;
        photo?: string;
        email: string;
        displayName: string;
    };
    
  }
  

const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );
    
    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp","desc")
    );

    // リアルタイムに情報を表示したい時はonSnapshot。
    onSnapshot(collectionRef, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,

        });
      });
      setSubDocuments(results);
    });
  },[channelId])
  return (
    { subDocuments }
  )
}

export default useSubCollection

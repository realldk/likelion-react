import { BaseLayout } from '@/components';
import { useFetch } from '@/hooks/useFetch';
import { useMakeupProduct } from '@/service/useMakeupProduct';
import { usePhotos } from '@/service/usePhotos';
import classes from './SignIn.module.scss';
/* Component ---------------------------------------------------------------- */

export default function SignIn() {
  const alvaState = useMakeupProduct('alva');
  const booshState = useMakeupProduct('boosh');
  const photoState = usePhotos({ page: 5, limit: 50 });

  console.log(alvaState, booshState, photoState);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('로그인 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout className={classes.SignIn}>
      <h2>로그인 페이지</h2>
    </BaseLayout>
  );
}

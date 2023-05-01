import { classNames } from 'shared/lib/classNames/classNames'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/editableProfileCard'

interface ProfilePageProps {
  className?: string
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams()

  return (
      <Page className={classNames('', {}, [className])}>
        <VStack gap='16' max>
          <EditableProfileCard id={id} />
        </VStack>
      </Page>
  )
}

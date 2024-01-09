import { useCallback } from 'react'
import toast from 'react-hot-toast';

export const useToast = () => {
  const showToast = useCallback(
    ({  description, status = 'error' }: any) => {
      toast.dismiss()
      if(status == 'error'){
      toast.error(description);
      }
      if(status == 'success'){
        toast.success(description);
     }
    },
    []
  )

  return { showToast }
}
